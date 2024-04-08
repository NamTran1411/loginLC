"use client";

import Error from "next/error";

export default function NotFound() {
  return (
    <html>
      <body className="text-center">
        <Error statusCode={404} />
      </body>
    </html>
  );
}
