export default function Page({ params }: { params: { id: string } }) {
  return <h1>Product {params.id}</h1>;
}
