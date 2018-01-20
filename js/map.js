ymaps.ready(init);

var myMap;

function init () {
    myMap = new ymaps.Map('map',
        {
            center: [53.833066, 27.685358],
            zoom:17

        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    ),

        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.833100, 27.685358]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'ООО "РезервСантех"',
                hintContent: 'ул. Свислочская,д.39,к.22'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#redStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        }),

        myMap.geoObjects
            .add(myGeoObject)
}
function setBounds () {
    // Bounds - границы видимой области карты.
    // Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
    myMap.setBounds([[53, 27], [54, 28]]);
}


