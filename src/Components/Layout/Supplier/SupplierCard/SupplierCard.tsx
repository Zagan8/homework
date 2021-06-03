interface supplierProps {
  companyName?: string;
  contactName?: string;
}

export default function SupplierCard(props: supplierProps): JSX.Element {
  return (
    <div className="supplier-card Home">
      Name : {props.contactName}
      Company name: {props.companyName}
    </div>
  );
}
