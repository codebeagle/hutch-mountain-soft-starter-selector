var softStarterSelector = {
    'products': {
        'recreation': {
            'roofTop': {
                'typeImage': '',
                'typeTitle': 'Roof Top Unit for RV/Marine',
                'typeDescription': 'Description for the test product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': 'all',
                        'label': 'All',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '< 12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12K-20K',
                        'label': '12K-20K | 3.5K-5.8K',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120Vall': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': '37359968354453'
                    },
                    '240V<12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': '37359968354453'
                    },
                    '240V12K-20K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': '37359968354453'
                    }
                }
            },
            'basement': {
                'typeImage': '',
                'typeTitle': 'Basement Unit for RV/Marine',
                'typeDescription': 'Description for the basement product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '208-240V',
                        'label': '208-240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': 'all',
                        'label': 'All',
                        'voltage': ['120V','208-240V']
                    }
                ],
                'resultModels': {
                    '120Vall': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '208-240Vall': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                }
            },
            'underCounter': {
                'typeImage': '',
                'typeTitle': 'Under Counter Unit for RV/Marine',
                'typeDescription': 'Description for the under counter product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '<12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'part': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V<12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                }
            },
            'portable': {
                'typeImage': '',
                'typeTitle': 'Portable unit for RV/Marine',
                'typeDescription': 'Description for the portable product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '<12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'part': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V<12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            },
            'window': {
                'typeImage': '',
                'typeTitle': 'Window unit for RV/Marine',
                'typeDescription': 'Description for the window product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '<12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'part': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V<12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            },
            'chiller': {
                'typeImage': '',
                'typeTitle': 'Chiller unit for RV/Marine',
                'typeDescription': 'Description for the chiller product',
                'available': true,
                'voltage': [
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '16-30K',
                        'label': '16-30K | 3.5-5.8KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '31-48K',
                        'label': '31-48K | 4.0-8.0KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '49-72K',
                        'label': '49-72K | 14.0-21.0KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '240V16-30K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V31-48K': {
                        'part': 'ASY-368-X48-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 368',
                        'shopifyVariant': ''
                    },
                    '240V49-72K': {
                        'part': 'ASY-368-X72-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 368',
                        'shopifyVariant': ''
                    }
                }
            },
            'selfContained': {
                'typeImage': '',
                'typeTitle': 'Self contained unit for RV/Marine',
                'typeDescription': 'Description for the self-contained product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '5-12K',
                        'label': '5-12K | 1.5-3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'model': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'model': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V5-12K': {
                        'model': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'model': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            }
        },
        'residential': {
            'centralAir': {
                'typeImage': '',
                'typeTitle': 'Central Air unit for residential',
                'typeDescription': 'Description for the central air product',
                'available': true,
                'voltage': [
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '16-30K',
                        'label': '16-30K | 4.0-8.0KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '31-48K',
                        'label': '31-48K | 9.0-14.0KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '49-72K',
                        'label': '49-72K | 14.0-21.0KW',
                        'voltage': ['240V']
                    },
                ],
                'resultModels': {
                    '240V16-30K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V31-48K': {
                        'part': 'ASY-368-X48-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 368',
                        'shopifyVariant': ''
                    },
                    '240V49-72K': {
                        'part': 'ASY-368-X72-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 368',
                        'shopifyVariant': ''
                    },
                }
            },
            'waterSourceHeatPump': {
                'typeImage': '',
                'typeTitle': 'Water source heat pump for residential',
                'typeDescription': 'Description for the water source heat pump product',
                'available': true,
                'voltage': [
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '24-36K',
                        'label': '24-36K | 7.0-10.0KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '37-72K',
                        'label': '37-72K | 10.0-21.0KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '240V24-36K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V37-72K': {
                        'part': 'ASY-368-X72-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 368',
                        'shopifyVariant': ''
                    }
                }
            },
            'split': {
                'typeImage': '',
                'typeTitle': 'Split unit for residential',
                'typeDescription': 'Description for the split unit product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '<12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'model': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'model': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V<12K': {
                        'model': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'model': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            },
            'portable': {
                'typeImage': '',
                'typeTitle': 'Portable unit for residential',
                'typeDescription': 'Description for the portable unit product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '<12K',
                        'label': '<12K | 3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'part': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V<12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            },
            'window': {
                'typeImage': '',
                'typeTitle': 'Window unit for residential',
                'typeDescription': 'Description for the window product',
                'available': true,
                'voltage': [
                    {
                        'volts': '120V',
                        'label': '120 Volts'
                    },
                    {
                        'volts': '240V',
                        'label': '240 Volts'
                    }
                ],
                'btus': [
                    {
                        'btu': '<9K',
                        'label': '<9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '>9K',
                        'label': '>9K | 2.7KW',
                        'voltage': ['120V']
                    },
                    {
                        'btu': '5-12K',
                        'label': '5-12K | 1.5-3.5KW',
                        'voltage': ['240V']
                    },
                    {
                        'btu': '12-24K',
                        'label': '12-24K | 3.5-5.8KW',
                        'voltage': ['240V']
                    }
                ],
                'resultModels': {
                    '120V<9K': {
                        'part': 'ASY-364-T36',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '120V>9K': {
                        'part': 'ASY-364-X20-IP or ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V5-12K': {
                        'part': 'ASY-364-X07-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    },
                    '240V12-24K': {
                        'part': 'ASY-364-X36-BLUE',
                        'image': 'easystart-placeholder.jpg',
                        'model': 'MicroAir EasyStart™ 364',
                        'shopifyVariant': ''
                    }
                }
            }
        }
    }
};