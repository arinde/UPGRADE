import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, "users/" + user.uid);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setUserData(data);
        }
      });
    } else {
      navigate("/signin");
    }
  }, []);

  const transactions = [
    { id: 1, name: "Grocery Store", amount: "-$25.00", date: "May 17" },
    { id: 2, name: "Salary", amount: "+$2,000.00", date: "May 15" },
    { id: 3, name: "Electric Bill", amount: "-$75.00", date: "May 13" },
  ];

  const activities = [
    { id: 1, action: "Signed in", time: "5 minutes ago" },
    { id: 2, action: "Viewed dashboard", time: "4 minutes ago" },
    { id: 3, action: "Checked transactions", time: "2 minutes ago" },
  ];

  return (
    <div className="min-h-screen bg-lime-50 p-6">
      <h1 className="text-3xl mt-28 md:text-4xl font-bold mb-8 text-green-900 text-center">
        Welcome {userData?.name || "User"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 col-span-1">
          <h2 className="text-lg text-gray-600 mb-2">Available Balance</h2>
          <p className="text-4xl font-bold text-green-700">$1,500</p>
        </div>

        {/* Transaction History */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Transaction History
          </h2>
          <ul className="divide-y divide-gray-200">
            {transactions.map((txn) => (
              <li key={txn.id} className="py-2 flex justify-between text-sm">
                <span>{txn.name}</span>
                <span>{txn.amount}</span>
                <span className="text-gray-400">{txn.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-green-200 col-span-1 md:col-span-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <ul className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <li key={activity.id} className="py-2 flex justify-between text-sm">
                <span>{activity.action}</span>
                <span className="text-gray-400">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => auth.signOut().then(() => navigate("/signin"))}
          className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

