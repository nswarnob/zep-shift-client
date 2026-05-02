import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export const SendParcel = () => {
  const { register, control, handleSubmit } = useForm({ mode: "onSubmit" });
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenter = useLoaderData();

  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const parcelWeight = useWatch({ control, name: "parcelWeight" });
  const parcelType = useWatch({ control, name: "parcelType" });
  const senderDistrict = useWatch({ control, name: "senderDistrict" });
  const receiverDistrict = useWatch({ control, name: "receiverDistrict" });

  if (!serviceCenter || serviceCenter.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center animate-pulse">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading service centers...</p>
        </div>
      </div>
    );
  }

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  // Calculate cost in real-time
  const calculateCost = () => {
    if (!parcelType || !parcelWeight || !senderDistrict || !receiverDistrict) return null;

    const isDocument = parcelType === "document";
    const isSameDistrict = senderDistrict === receiverDistrict;
    const weight = parseFloat(parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (weight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = weight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    return cost;
  };

  const cost = calculateCost();

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeightVal = parseFloat(data.parcelWeight);

    let finalCost = 0;

    if (isDocument) {
      finalCost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeightVal <= 3) {
        finalCost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeightVal - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        finalCost = minCharge + extraCharge;
      }
    }

    Swal.fire({
      title: "Confirm Parcel Details",
      html: `
        <div className="text-left">
          <p><strong>Parcel:</strong> ${data.parcelName}</p>
          <p><strong>Type:</strong> ${data.parcelType}</p>
          <p><strong>Weight:</strong> ${data.parcelWeight} kg</p>
          <hr />
          <p><strong style="color: #84cc16; font-size: 1.2em;">Total Cost: ${finalCost} Taka</strong></p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#84cc16",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm & Send",
      customClass: {
        popup: "rounded-2xl",
        confirmButton: "bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/send-parcel", { ...data, cost: finalCost }).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Your parcel has been submitted successfully!",
              icon: "success",
              confirmButtonColor: "#84cc16",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Send A Parcel
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Quickly and securely send your parcels to any location across our network
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 bg-lime-400 text-gray-900`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 bg-lime-400`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Parcel Details</span>
            <span>Sender Info</span>
            <span>Receiver Info</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-12">
          {/* Step 1: Parcel Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-lime-100 hover:shadow-xl transition-shadow animate-slideUpFade">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-lime-400 text-gray-900 rounded-full flex items-center justify-center font-bold">1</span>
              Parcel Details
            </h2>

            {/* Parcel Type Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                Parcel Type
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    {...register("parcelType", { required: true })}
                    value="document"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className="text-lg font-medium text-gray-700 group-hover:text-lime-400 transition-colors">
                    📄 Document
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    {...register("parcelType", { required: true })}
                    value="non-document"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className="text-lg font-medium text-gray-700 group-hover:text-lime-400 transition-colors">
                    📦 Non-Document
                  </span>
                </label>
              </div>
            </div>

            {/* Parcel Name and Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Parcel Name *
                </label>
                <input
                  type="text"
                  {...register("parcelName", { required: "Parcel name is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all duration-300 outline-none"
                  placeholder="e.g., Books, Clothes, Electronics"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Weight (kg) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  {...register("parcelWeight", {
                    required: "Weight is required",
                    valueAsNumber: true,
                  })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all duration-300 outline-none"
                  placeholder="e.g., 2.5"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Sender Information */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow animate-slideUpFade" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold">2</span>
              Sender Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: "Name is required" })}
                  defaultValue={user?.displayName || ""}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("senderPhone", { required: "Phone is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  placeholder="01xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("senderEmail", { required: "Email is required" })}
                  defaultValue={user?.email || ""}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Region *
                </label>
                <select
                  {...register("senderRegion", { required: "Region is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none bg-white"
                >
                  <option value="">Select Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  District *
                </label>
                <select
                  {...register("senderDistrict", { required: "District is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none bg-white"
                  disabled={!senderRegion}
                >
                  <option value="">Select District</option>
                  {senderRegion && districtByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Address *
                </label>
                <input
                  type="text"
                  {...register("senderAddress", { required: "Address is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                  placeholder="House/Building number, Street, Area"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pickup Instructions (Optional)
                </label>
                <textarea
                  {...register("pickupInstruction")}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                  placeholder="e.g., Call before coming, Gate code: 1234, Available after 5 PM"
                  rows="4"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Receiver Information */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow animate-slideUpFade" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center font-bold">3</span>
              Receiver Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("receiverName", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none"
                  placeholder="Receiver's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("receiverPhone", { required: "Phone is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none"
                  placeholder="01xxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("receiverEmail", { required: "Email is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none"
                  placeholder="receiver@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Region *
                </label>
                <select
                  {...register("receiverRegion", { required: "Region is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none bg-white"
                >
                  <option value="">Select Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  District *
                </label>
                <select
                  {...register("receiverDistrict", { required: "District is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none bg-white"
                  disabled={!receiverRegion}
                >
                  <option value="">Select District</option>
                  {receiverRegion && districtByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Address *
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: "Address is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none"
                  placeholder="House/Building number, Street, Area"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  {...register("deliveryInstruction")}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-300 outline-none resize-none"
                  placeholder="e.g., Give to guard, Call before delivery, Leave at door"
                  rows="4"
                />
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          {cost && (
            <div className="bg-gradient-to-r from-lime-50 to-lime-100 rounded-2xl p-8 border-2 border-lime-300 animate-slideUpFade" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-lg mb-2">Estimated Delivery Cost</p>
                  <p className="text-4xl font-bold text-lime-600">৳ {cost}</p>
                </div>
                <div className="text-5xl">💰</div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                {senderDistrict === receiverDistrict ? "✓ Same district delivery" : "✓ Different district delivery"}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center animate-slideUpFade" style={{ animationDelay: "0.4s" }}>
            <button
              type="submit"
              className="bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              <span>📦</span>
              Send Parcel Now
            </button>
            <p className="text-sm text-gray-600 mt-4">
              You'll be asked to confirm the cost before final submission
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
