import React from 'react';

export const GlobalContext = React.createContext({});

export const defaultGlobalData = {
    items: [{   id:1,
                name:'Power station',
                price: 100,
             link: "https://www.amazon.com/dp/B07SM5HBK1/?coliid=I1MEDRJY8N0WG5&colid=CUNPFFJRVRCQ&psc=1&ref_=lv_ov_lig_dp_it",
             picture: "https://images-na.ssl-images-amazon.com/images/I/71kSFS8-nuL._AC_SX679_.jpg"},
            {   id:2,
                name:'Chainsaw',
                price: 200,
                link: "https://www.amazon.com/dp/B07B6G5QL7/?coliid=IED1CNW8FJQHQ&colid=CUNPFFJRVRCQ&psc=1&ref_=lv_ov_lig_dp_it",
                picture: "https://images-na.ssl-images-amazon.com/images/I/51arr59kIcL._AC_SX679_.jpg"},
            {   id:3,
                name:'Drone',
                price: 200,
                link: "https://www.amazon.com/dp/B07H5J7YWH/?coliid=IPH3UG7360CLX&colid=3HJ3YVY05CF6Z&psc=1&ref_=lv_ov_lig_dp_it",
                picture: "https://images-na.ssl-images-amazon.com/images/I/716cwsKK72L._AC_SX679_.jpg"}
           ],
    sortType: 'name',
    sortOrder: 'asc'
};
