import React from "react";
import { Link } from "react-router-dom";

export default function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <h3>תפריט</h3>

      <Link to="/Home">דף הבית</Link>
      <br />
      <Link to="/products">מוצרים</Link>
      <br />
      <Link to="/success">סיפור הצחלה</Link>
      <br />
      <Link to="/AboutUs">מי אנחנו</Link>
      <br />
      <Link to="/Suppliers">ספקים</Link>
    </div>
  );
}
