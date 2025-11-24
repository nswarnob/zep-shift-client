import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

export const SendParcel = () => {
  const { register, control, handleSubmit } = useForm({ mode: "onSubmit" });

  const serviceCenter = useLoaderData();

  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  if (!serviceCenter || serviceCenter.length === 0) {
    return <div className="text-center my-10">Loading service centers...</div>;
  }


  const districtByRegion = (region) => {
    const regionDistrict = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-10"> Send A Parcel </h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        <h3 className="text-2xl font-semibold mb-5">
          Enter Your Percel Details
        </h3>
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio"
              value="document"
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio"
              value="non-document"
            />
            Non-Document
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("percelName")}
              placeholder="Percel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight(kg)</label>
            <input
              type="number"
              className="input w-full"
              {...register("percelWeight")}
              placeholder="Percel Weight"
            />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Information */}
          <div className="sender-info border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6">Sender Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  {...register("senderName")}
                  className="input input-bordered w-139"
                  placeholder="Full Name"
                />
              </fieldset>
              <br />
              <fieldset className="fieldset">
                <label className="label">Sender Phone No</label>
                <input
                  type="tel"
                  {...register("senderPhone")}
                  className="input input-bordered w-full"
                  placeholder="01xxxxxxxxx"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Sender Email</label>
                <input
                  type="text"
                  {...register("senderEmail")}
                  className="input input-bordered w-full"
                  placeholder="abc@gmail.com"
                />
              </fieldset>

              <fieldset className="fieldset md:col-span-2">
                <label className="label">Address</label>
                <input
                  type="text"
                  {...register("senderAddress")}
                  className="input input-bordered w-full"
                  placeholder="House/Road, Area"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue={"Pick a Region"}
                  className="select"
                >
                  <option disabled={true}>Pick Your Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}{" "}
                    </option>
                  ))}
                </select>
                <option value="" disabled>
                  Pick Your Region
                </option>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick Your District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}{" "}
                    </option>
                  ))}
                </select>
                <option value="" disabled>
                  Pick Your District
                </option>
              </fieldset>

              <fieldset className="fieldset md:col-span-2">
                <label className="label">Pickup Instruction (Optional)</label>
                <textarea
                  {...register("pickupInstruction")}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Any special instruction for pickup (e.g. Call before coming, 3rd floor)"
                />
              </fieldset>
            </div>
          </div>

          {/* Receiver Information */}
          <div className="reciever-info border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6">
              Receiver Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  {...register("receiverName")}
                  className="input input-bordered w-139"
                  placeholder="Full Name"
                />
              </fieldset>

              <br />

              <fieldset className="fieldset">
                <label className="label">Receiver Phone No</label>
                <input
                  type="text"
                  {...register("receiverPhone")}
                  className="input input-bordered w-full"
                  placeholder="01xxxxxxxxx"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Receiver Email</label>
                <input
                  type="text"
                  {...register("receiverEmail")}
                  className="input input-bordered w-full"
                  placeholder="abc@gmail.com"
                />
              </fieldset>

              <fieldset className="fieldset md:col-span-2">
                <label className="label">Address</label>
                <input
                  type="text"
                  {...register("receiverAddress")}
                  className="input input-bordered w-full"
                  placeholder="House/Road, Area"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick Your Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}{" "}
                    </option>
                  ))}
                </select>
                <option value="" disabled>
                  Pick Your Region
                </option>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick Your District</option>
                  {districtByRegion(receiverRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}{" "}
                    </option>
                  ))}
                </select>
                <option value="" disabled>
                  Pick Your District
                </option>
              </fieldset>

              <fieldset className="fieldset md:col-span-2">
                <label className="label">Delivery Instruction (Optional)</label>
                <textarea
                  {...register("deliveryInstruction")}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Any special instruction for delivery (e.g. Give to guard, Call before delivery)"
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            type="submit"
            vlaue="Send Parcel"
            className="btn btn-primary w-50 mt-6"
          />
        </div>
      </form>
    </div>
  );
};
