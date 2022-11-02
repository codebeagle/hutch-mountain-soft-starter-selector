var softStarterSelector = {
    'products': {
        'recreation': {
            'roofTopUnit': {
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
                        'model': 'ASY-364-X20-IP or ASY-364-X36-BLUE'
                    },
                    '240V<12K': {
                        'model': 'ASY-364-X07-BLUE'
                    },
                    '240V12K-20K': {
                        'model': 'ASY-364-X36-BLUE'
                    }
                }
            }
        }
    }
};