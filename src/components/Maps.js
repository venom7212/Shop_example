import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, Button } from '@pbe/react-yandex-maps';
import { useSelector, useDispatch } from 'react-redux'
import { setCenter, setZoom, setPlacemark, setAdress } from '../redux/yandexMapSlice'
import skinMarker from '../resources/marker.png'


const Maps = () => {
    const coords1 = [57.15, 65.54]
    const coords1Z = 10
    const coords2 = [55.75, 37.57]
    const coords2Z = 10
    const center = useSelector(state => state.yandexMap.center)
    const zoom = useSelector(state => state.yandexMap.zoom)
    const marker = useSelector(state => state.yandexMap.placemark)

    const latMarker = marker[0]
    const lonMarker = marker[1]


    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('useeffect', marker)
        clickTest();


    }, [marker]);

    const testClick1 = () => {
        dispatch(setCenter(coords1))
        dispatch(setZoom(coords1Z))


    }

    const testClick2 = () => {
        dispatch(setCenter(coords2))
        dispatch(setZoom(coords2Z))
    }

    const clickTest = async () => {
        if (latMarker !== '') {
            let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
            let token = "e6940338b0f29a6df43889de6c2aa9517f6c2b2f";
            let query = { lat: latMarker, lon: lonMarker, radius_meters: 35, count: 5 };

            let options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify(query)
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log('resultPOST', result.suggestions);
                console.log('testClick coords', latMarker, lonMarker)
                // dispatch(setAdress(result.suggestions[0]));
                dispatch(setAdress(result.suggestions));

            } catch (error) {
                console.log("error", error);
            }
        }
        else {
            console.log('marker empty')
        }

    };
    // const defState = { center: [55.75, 37.57], zoom: 12 }
    return (
        <YMaps query={{ apikey: '69a2594c-e775-413a-a099-0ec552e47048' }}>
            <div className='yMap'>
                <Map
                    className='yMap2'
                    // width="400px"
                    // height="450px"
                    defaultState={{ center: center, zoom: zoom }}
                    state={{ center: center, zoom: zoom, controls: ["zoomControl", "fullscreenControl"] }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    onClick={(event) => {
                        // console.log('click marker', marker);
                        dispatch(setPlacemark(event.get('coords')));
                    }}
                >
                    <Button
                        options={{ maxWidth: 128 }}
                        data={{ content: "DEL MARKER" }}
                        onClick={() => {
                            dispatch(setPlacemark(['', '']))

                        }}
                    />
                    {marker && (
                        <Placemark
                            geometry={marker}
                            options={
                                { iconLayout: 'default#image', iconImageHref: skinMarker, iconImageSize: [26.43, 38.7] }
                            }
                        />

                    )}

                </Map>

                <button onClick={testClick1}>tmn</button>
                <button onClick={testClick2}>msc</button>


            </div>
        </YMaps>
    );

}

export default Maps
