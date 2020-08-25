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

        dummyData.forEach(function(item) {
            new google.maps.Marker({
                position: {
                    lat: item.lat,
                    lng: item.lng
                },
                map: mapInstance,
                icon: {
                    url: item.open ? element.getAttribute('data-open-pin') : element.getAttribute('data-pin'),
                    size: new google.maps.Size(37, 37),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(37 / 2, 37 / 2)
                }

                // icon: rootURL + '/img/icon_Brownfield.svg'
            });
        });


        var franchisersLinks = Array.prototype.slice.call(document.querySelectorAll('.franchise-geography__local-franchisers-link'));

        franchisersLinks.forEach(function(link, linkIndex) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                var pinToSelect = dummyData[linkIndex];

                if (pinToSelect) {
                    mapInstance.setZoom(14);
                    mapInstance.panTo({
                        lat: pinToSelect.lat,
                        lng: pinToSelect.lng
                    });
                }
            })
        })
    });
});
