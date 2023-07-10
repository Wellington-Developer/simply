import { BannerContainer } from "./Banner";
import { RowProducts } from "./RowProducts";

export const Home = () => {
    return (
        <>
            <BannerContainer />
            <RowProducts title="Tá na promo!" />
            <RowProducts title="30% OFF" />
            <RowProducts title="Viagens Nacionais" />
            <RowProducts title="Viagens Internacionais" />
        </>
    )
}