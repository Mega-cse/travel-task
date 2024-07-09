import { BrowserRouter, Routes, Route } from 'react-router-dom'
import All from './All'
import Beach from './Beach'
import Mountain from './Mountain'
import Icebergs from './Icebergs'
import Waterfall from './Waterfall'
import Navbars from './Navbars'

function Explore() {
    let data = [
        {
            id: 1,
            image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg",
            name: "Goa beach",
            location: "Goa",
            place: "beach",

        },
        {
            id: 2,
            image: "https://hblimg.mmtcdn.com/content/hubble/img/digha/mmt/destination/m_digha-landscape_l_400_640.jpg",
            name: "Coastal Resort town",
            location: "Digha",
            place: "beach",
        },
        {
            id: 3,
            image: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
            name: "Tropical Band of Islands",
            location: "Lakshadweep",
            place: "beach"
        },
        {
            id: 4,
            image: "https://www.thephotoargus.com/wp-content/uploads/2016/02/Mount-Everest-01.jpg",
            name: "Mount Evererst",
            location: "Himalayas, Nepal/China",
            place: "mountain",
        },
        {
            id: 5,
            image: "https://www.thephotoargus.com/wp-content/uploads/2016/02/Mount-Fuji-01.jpg",
            name: "Mount Fuji",
            location: "Honshu Island, Japan",
            place: "mountain",
        },
        {
            id: 6,
            image: "https://www.thephotoargus.com/wp-content/uploads/2016/02/Mount-Kilimanjaro-01.jpg",
            name: "Mount Kilimanjaro",
            location: "Kilimanjaro Region, Tanzania",
            place: "mountain"
        },
        {
            id: 7,
            image: "https://img.redbull.com/images/c_fill,g_auto,w_1000,h_667/q_auto,f_auto/redbullcom/2015/03/26/1331713502093_6/a-pinnacle-iceberg-in-greenland.jpg",
            name: "Pinnacle iceberg",
            location: "Greenland",
            place: "icebergs",

        },
        {
            id: 8,
            image: "https://img.redbull.com/images/c_fill,g_auto,w_1000,h_667/q_auto,f_auto/redbullcom/2015/03/26/1331713501270_4/iceberg-alley-weddell-sea-antarctica.jpg",
            name: "Weddell Sea",
            location: "Antarctica",
            place: "icebergs",
        },
        {
            id: 9,
            image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/angel-falls.jpg",
            name: "Angel Falls",
            location: "Venezuela",
            place: "waterfall"
        },
        {
            id: 10,
            image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/victoria.jpg",
            name: "Victoria Falls",
            location: "Zambia",
            place: "waterfall"
        },


    ];
    return (
        <>

            <div>
                <BrowserRouter>
                    <div>
                        <h1>Explore places</h1>
                        <Navbars />
                    </div>
                    <Routes>

                        <Route path='/beach' element={<Beach data={data} />} />
                        <Route path='/mountain' element={<Mountain data={data} />} />
                        <Route path='/waterfall' element={<Waterfall data={data} />} />
                        <Route path='/icebergs' element={<Icebergs data={data} />} />
                        <Route path='/' element={<All data={data} />} />


                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Explore;
