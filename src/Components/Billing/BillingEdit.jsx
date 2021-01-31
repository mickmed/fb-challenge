import { useState } from "react";

const BillingEdit = () => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form>
      <input type="text" name="name" value={value} onChange={handleChange} />
    </form>
  );
};

export default BillingEdit;
