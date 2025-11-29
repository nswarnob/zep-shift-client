import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel?email=${user.email}`);
      return res.data;
    }, 
  });


  return (
    <div className="overflow-x-auto">
      <h2>Total My Parcl:{parcels.length} </h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td>{parcel.parcelName} </td>
              <td>{parcel.cost}</td>
              <td>Pending</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcel;
