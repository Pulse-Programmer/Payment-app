import { useState, useEffect } from "react";

function Client() {
  const [invoice, setInvoice] = useState();

  useEffect(() => {
    fetch("url")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setInvoice(data);
      });
  }, []);

  return (
    <div>
      <h1 className="font-serif text-center font-semibold text-2xl">Client</h1>
      {invoice && (
        <div>
          <h2>Invoice #{invoice.id}</h2>
          <p>Date: {invoice.date}</p>
          <p>Amount: ${invoice.amount}</p>
          <button>Pay</button>
          <button disabled={true}>Approve</button>
        </div>
      )}
    </div>
  );
}

export default Client;
