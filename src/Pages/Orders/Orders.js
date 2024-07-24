import React, { useState, useContext, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(fetchedOrders);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet</div>
          )}

          {/* ordered items */}
          <div>
            {orders?.map((eachOrder) => {
              return (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order ID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
