import BannerItem from "./_components/banner-item";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";


export default function Home() {
  return (
    <>
        <Header />

        <div className="p-5">
          <CategoryList />
        </div>

        <div className="px-5">
        <BannerItem
          src="/banner01.png"
          alt="Realize seu sonho da casa própria"
        />
      </div>


    </>
  );
}
