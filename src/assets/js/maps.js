document.addEventListener('DOMContentLoaded', function() {
    var geographyMaps = Array.prototype.slice.call(document.querySelectorAll('.js-franchise-geography-map'));

    var mapStyles = [
        {
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ebe3cd'
                }
            ]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#523735'
                }
            ]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#f5f1e6'
                }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#c9b2a6'
                }
            ]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#dcd2be'
                }
            ]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#ae9e90'
                }
            ]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#dfd2ae'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#dfd2ae'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#93817c'
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#a5b076'
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#447530'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#f5f1e6'
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#fdfcf8'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#f8c967'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#e9bc62'
                }
            ]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#e98d58'
                }
            ]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#db8555'
                }
            ]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#806b63'
                }
            ]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#dfd2ae'
                }
            ]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#8f7d77'
                }
            ]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#ebe3cd'
                }
            ]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#dfd2ae'
                }
            ]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#b9d3c2'
                }
            ]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#92998d'
                }
            ]
        }
    ];

    var dummyData = [
        {
            open: false,
            lat: 55.819726,
            lng: 49.136965
        },

        {
            open: true,
            lat: 55.814177,
            lng: 49.06587
        },

        {
            open: false,
            lat: 55.768332,
            lng: 49.115154
        },
        {
            open: true,
            lat: 55.788176,
            lng: 49.243848
        },

        {
            open: false,
            lat: 55.765368,
            lng: 49.22171
        }
    ];

    geographyMaps.forEach(function(element) {
        var centerCoords = {
            lat: parseFloat(element.getAttribute('data-lat')),
            lng: parseFloat(element.getAttribute('data-lng'))
        };

        var mapInstance = new google.maps.Map(element, {
            zoom: 12,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            styles: mapStyles
        });

        mapInstance.setCenter(centerCoords);

        let infoWindows = [];

        dummyData.forEach(function(item) {
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div class="franchise-geography__local-franchisers">
                        <div class="franchise-geography__local-franchisers-top-row">
                            <div class="franchise-geography__local-franchisers-city">
                                г. Казань
                            </div>
                            <div class="franchise-geography__local-franchisers-count">
                                5 франчайзи
                            </div>
                        </div>
                        <ul class="franchise-geography__local-franchisers-list">
                            <li class="franchise-geography__local-franchisers-list-item">
                                <a href="#" class="franchise-geography__local-franchisers-link">
                                    <div class="franchise-geography__local-franchisers-link-photo-container">
                                        <img src="img/members/1.jpg" alt=""
                                            class="franchise-geography__local-franchisers-link-photo">
                                    </div>
                                    Егор Алафузов
                                </a>
                            </li>
                            <li class="franchise-geography__local-franchisers-list-item">
                                <a href="#" class="franchise-geography__local-franchisers-link">
                                    <div class="franchise-geography__local-franchisers-link-photo-container">
                                        <img src="img/members/2.jpg" alt=""
                                            class="franchise-geography__local-franchisers-link-photo">
                                    </div>
                                    Гвидон Вишневский
                                </a>
                            </li>
                            <li class="franchise-geography__local-franchisers-list-item">
                                <a href="#" class="franchise-geography__local-franchisers-link">
                                    <div class="franchise-geography__local-franchisers-link-photo-container">
                                        <img src="img/members/1.jpg" alt=""
                                            class="franchise-geography__local-franchisers-link-photo">
                                    </div>
                                    Сергей Миронов
                                </a>
                            </li>
                        </ul>
                    </div>
                `,
                maxWidth: 350
            });
            const marker = new google.maps.Marker({
                position: {
                    lat: item.lat,
                    lng: item.lng
                },
                map: mapInstance,
                icon: {
                    url: item.open ? element.getAttribute('data-open-pin') : element.getAttribute('data-pin'),
                    size: item.open ? new google.maps.Size(37, 37) : new google.maps.Size(23, 23),
                    origin: new google.maps.Point(0, 0),
                    anchor: item.open ? new google.maps.Point(37 / 2, 37 / 2) : new google.maps.Point(23 / 2, 23 / 2)
                }

                // icon: rootURL + '/img/icon_Brownfield.svg'
            });

            infoWindows.push(infoWindow);

            marker.addListener('click', () => {
                infoWindow.open(mapInstance, marker);
                infoWindows.forEach(element => {
                    if (infoWindow !== element) {
                        element.close();
                    }
                });
            });
        });
    });
});
