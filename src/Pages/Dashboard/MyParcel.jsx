import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [filterStatus, setFilterStatus] = useState("all");
  const [hasSubmittedParcel, setHasSubmittedParcel] = useState(false);

  const {
    data: parcels = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is required");
      }
      try {
        const res = await axiosSecure.get(`/parcel?email=${user.email}`);
        // Handle both old format (direct array) and new format (with data property)
        return res.data.data || res.data || [];
      } catch (err) {
        console.error("Error fetching parcels:", err);
        throw err;
      }
    },
    enabled: !!user?.email,
    staleTime: 5000,
    cacheTime: 10000,
  });

  // Check for recently submitted parcel and refetch
  useEffect(() => {
    const checkForNewParcel = () => {
      const sessionFlag = sessionStorage.getItem("parcelSubmitted");
      if (sessionFlag && !hasSubmittedParcel) {
        setHasSubmittedParcel(true);
        refetch();
        sessionStorage.removeItem("parcelSubmitted");
        // Show notification
        Swal.fire({
          title: "Parcel Loaded!",
          text: "Your newly submitted parcel is now visible in the list.",
          icon: "info",
          timer: 3000,
          timerProgressBar: true,
        });
      }
    };
    checkForNewParcel();
  }, [refetch, hasSubmittedParcel]);

  const filteredParcels =
    filterStatus === "all"
      ? parcels
      : parcels.filter((p) => p.status === filterStatus);

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        icon: "⏳",
        label: "Pending",
      },
      processing: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        icon: "🔄",
        label: "Processing",
      },
      shipped: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        icon: "📦",
        label: "Shipped",
      },
      delivered: {
        bg: "bg-green-100",
        text: "text-green-800",
        icon: "✅",
        label: "Delivered",
      },
      cancelled: {
        bg: "bg-red-100",
        text: "text-red-800",
        icon: "❌",
        label: "Cancelled",
      },
    };
    return statusMap[status] || statusMap.pending;
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Cancel Parcel?",
      text: "Are you sure you want to cancel this parcel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, cancel it",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle cancel logic
        Swal.fire("Cancelled!", "Your parcel has been cancelled.", "success");
        refetch();
      }
    });
  };

  const handleEdit = () => {
    Swal.fire({
      title: "Edit Parcel",
      text: "Edit functionality coming soon",
      icon: "info",
    });
  };

  const handleViewDetails = (parcel) => {
    const createdDate = parcel.createdAt
      ? new Date(parcel.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "N/A";

    Swal.fire({
      title: "Parcel Details",
      html: `
        <div class="text-left text-sm space-y-3">
          <div class="border-b pb-2">
            <p class="font-bold text-lime-600">Parcel Information</p>
            <p class="text-gray-700">Name: ${parcel.parcelName}</p>
            <p class="text-gray-700">Type: ${parcel.parcelType}</p>
            <p class="text-gray-700">Weight: ${parcel.parcelWeight} kg</p>
            <p class="text-gray-700">Cost: ৳${parcel.cost}</p>
          </div>
          <div class="border-b pb-2">
            <p class="font-bold text-blue-600">Sender Information</p>
            <p class="text-gray-700">Name: ${parcel.senderName}</p>
            <p class="text-gray-700">Email: ${parcel.senderEmail}</p>
            <p class="text-gray-700">Phone: ${parcel.senderPhone}</p>
            <p class="text-gray-700">Address: ${parcel.senderAddress}, ${parcel.senderDistrict}</p>
          </div>
          <div class="border-b pb-2">
            <p class="font-bold text-purple-600">Receiver Information</p>
            <p class="text-gray-700">Name: ${parcel.receiverName}</p>
            <p class="text-gray-700">Email: ${parcel.receiverEmail}</p>
            <p class="text-gray-700">Phone: ${parcel.receiverPhone}</p>
            <p class="text-gray-700">Address: ${parcel.receiverAddress}, ${parcel.receiverDistrict}</p>
          </div>
          <div>
            <p class="font-bold text-gray-600">Submitted On</p>
            <p class="text-gray-700">${createdDate}</p>
          </div>
        </div>
      `,
      confirmButtonColor: "#84cc16",
      confirmButtonText: "Close",
      customClass: {
        popup: "rounded-2xl",
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center animate-pulse">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your parcels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Parcels
          </h2>
          <p className="text-gray-600 mb-6">
            {error.message ||
              "There was an error loading your parcels. Please try again."}
          </p>
          <button
            onClick={() => refetch()}
            className="bg-lime-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-lime-500 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fadeIn flex items-center justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My Parcels
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Track and manage all your parcel shipments
            </p>
          </div>
          <button
            onClick={() => refetch()}
            disabled={isLoading}
            className="bg-lime-400 hover:bg-lime-500 disabled:bg-gray-400 text-gray-900 font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
            title="Refresh parcels list"
          >
            {isLoading ? (
              <>
                <span className="inline-block animate-spin">⟳</span>
                Refreshing...
              </>
            ) : (
              <>⟳ Refresh</>
            )}
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Total Parcels",
              value: parcels.length,
              icon: "📦",
              color: "from-blue-50 to-blue-100",
              textColor: "text-blue-600",
            },
            {
              label: "Delivered",
              value: parcels.filter((p) => p.status === "delivered").length,
              icon: "✅",
              color: "from-green-50 to-green-100",
              textColor: "text-green-600",
            },
            {
              label: "In Transit",
              value: parcels.filter((p) => p.status === "shipped").length,
              icon: "🚚",
              color: "from-purple-50 to-purple-100",
              textColor: "text-purple-600",
            },
            {
              label: "Pending",
              value: parcels.filter(
                (p) => p.status === "pending" || p.status === "processing",
              ).length,
              icon: "⏳",
              color: "from-yellow-50 to-yellow-100",
              textColor: "text-yellow-600",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 border-2 border-gray-100 stagger-item`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold ${stat.textColor}`}>
                    {stat.value}
                  </p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["all", "pending", "processing", "shipped", "delivered"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                  filterStatus === status
                    ? "bg-lime-400 text-gray-900 shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-lime-400"
                }`}
              >
                {status === "all" ? "All Parcels" : status}
              </button>
            ),
          )}
        </div>

        {/* Parcels Table or Empty State */}
        {filteredParcels.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center animate-slideUpFade border-2 border-gray-100">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Parcels Found
            </h3>
            <p className="text-gray-600 mb-6">
              {filterStatus === "all"
                ? "You haven't sent any parcels yet. Start by sending your first parcel!"
                : `No ${filterStatus} parcels at the moment.`}
            </p>
            <a
              href="/send-parcel"
              className="inline-block bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              Send a Parcel
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 animate-slideUpFade">
            {/* Table for Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Parcel Info
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Route
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Submitted
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Payment
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParcels.map((parcel, idx) => {
                    const statusInfo = getStatusBadge(parcel.status);
                    return (
                      <tr
                        key={parcel._id}
                        className="border-b border-gray-200 hover:bg-lime-50 transition-colors duration-300 stagger-item"
                        style={{ animationDelay: `${(idx % 5) * 0.05}s` }}
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">
                              {parcel.parcelName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {parcel.parcelWeight} kg • {parcel.parcelType}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p className="text-gray-600">
                              {parcel.senderDistrict} →{" "}
                              {parcel.receiverDistrict}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-lg text-lime-600">
                            ৳ {parcel.cost || "N/A"}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${statusInfo.bg} ${statusInfo.text}`}
                          >
                            <span>{statusInfo.icon}</span>
                            {statusInfo.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-600">
                            {parcel.createdAt
                              ? new Date(parcel.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  },
                                )
                              : "N/A"}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              parcel.paymentStatus === "paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {parcel.paymentStatus || "Pending"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEdit()}
                              className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-300 text-blue-600 hover:text-blue-700"
                              title="Edit"
                            >
                              ✏️
                            </button>
                            {parcel.status === "pending" && (
                              <button
                                onClick={() => handleCancel()}
                                className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-300 text-red-600 hover:text-red-700"
                                title="Cancel"
                              >
                                🗑️
                              </button>
                            )}
                            <button
                              onClick={() => handleViewDetails(parcel)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                              title="View Details"
                            >
                              👁️
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Card View for Mobile */}
            <div className="md:hidden space-y-4 p-6">
              {filteredParcels.map((parcel, idx) => {
                const statusInfo = getStatusBadge(parcel.status);
                return (
                  <div
                    key={parcel._id}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-lime-400 transition-all duration-300 stagger-item"
                    style={{ animationDelay: `${(idx % 5) * 0.05}s` }}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <p className="font-bold text-lg text-gray-900">
                          {parcel.parcelName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {parcel.parcelWeight} kg • {parcel.parcelType}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.bg} ${statusInfo.text} whitespace-nowrap`}
                      >
                        {statusInfo.icon} {statusInfo.label}
                      </span>
                    </div>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Route</p>
                      <p className="font-semibold text-gray-900">
                        {parcel.senderDistrict} → {parcel.receiverDistrict}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Cost</p>
                        <p className="font-bold text-lime-600 text-lg">
                          ৳ {parcel.cost || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Payment</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            parcel.paymentStatus === "paid"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {parcel.paymentStatus || "Pending"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit()}
                        className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                      >
                        ✏️ Edit
                      </button>
                      {parcel.status === "pending" && (
                        <button
                          onClick={() => handleCancel()}
                          className="flex-1 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                        >
                          🗑️ Cancel
                        </button>
                      )}
                      <button
                        className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                        onClick={() => handleViewDetails(parcel)}
                      >
                        👁️ View
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div
          className="mt-12 bg-gradient-to-r from-lime-50 to-blue-50 rounded-2xl p-8 border-2 border-lime-200 animate-slideUpFade"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Track in Real-Time
              </h3>
              <p className="text-sm text-gray-600">
                Monitor your parcels every step of the way
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Get Updates</h3>
              <p className="text-sm text-gray-600">
                Receive SMS and email notifications
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Contact our support team anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParcel;
