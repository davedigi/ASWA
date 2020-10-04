import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAxiosGet } from '../Hooks/HttpRequests';
import Skeleton from 'react-loading-skeleton';

// TODO usare useCrud.js con mongodb
function Product() {
    // const {id} = useParams();
    // const url=`https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products/${id}`
    // const url=`https://5f2a8d0d6ae5cc0016422a91.mockapi.io/api/v1/products/1`
    const url = 'https://run.mocky.io/v3/a7d372ef-4a55-447d-9bb2-98c53fed94b3'

    let products = useAxiosGet(url)
    const all_content = [];
    let content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                <Skeleton />
            </h1>
            <div>
                <Skeleton height={400} />
            </div>
            <div className="font-bold text-xl mb-3">
                <Skeleton />
            </div>
            <div>
                <Skeleton />
            </div>
        </div>

    if (products.error) {
        all_content.push(' <p> There was an error, please refresh or try again later! </p>')
    }
    if (products.data) {
        products.data.map(
            item => (
                content =
                // <div>
                //     <h1 className="text-2xl font-bold mb-3">
                //         {item.article.item.translatedLabel}
                //     </h1>
                //     <div>
                //         <img src={item.imageUrl} alt={item.article.item.translatedLabel} />
                //     </div>
                //     <div className="font-bold text-xl mb-3">
                //         {/* € {parseFloat(item.finalPrice)} */}
                //         € 12,34
                //     </div>
                //     <div>
                //         {item.id}
                //     </div>
                // </div>,
                <div className="flex flex-column bg-gray-200">
                    <div className="text-gray-700 text-center bg-green-300 px-4 py-2 m-2">
                        <h1 className="text-2xl font-bold mb-3">
                            {item.article.item.translatedLabel}
                        </h1>
                        <div>
                            <img src={item.imageUrl} alt={item.article.item.translatedLabel} />
                        </div>
                        <div className="font-bold text-xl mb-3">
                            <span>Min price: </span>
                            € 12,34
                        </div>
                        <div>
                            Code: {item.id}
                        </div>
                    </div>
                </div>,
                all_content.push(content)
            )
        )
    }
    console.log(products)
    console.log(all_content)
    return (
        <div>
            {all_content}
        </div>
    )
}

export default Product