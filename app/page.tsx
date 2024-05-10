import CategoryList from "./_components/category-list";
import Header from "./_components/header";


export default function Home() {
  return (
    <>
        <Header />

        <div className="p-6">
          <CategoryList />
        </div>
    </>
  );
}
