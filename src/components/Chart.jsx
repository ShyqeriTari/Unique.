import { ResponsiveRadar } from '@nivo/radar'

export const MyResponsiveRadar = () => (
    <ResponsiveRadar
        data = {[
            {
              "taste": "fruity",
              "chardonay": 33,
              "carmenere": 27,
              "syrah": 23
            },
            {
              "taste": "bitter",
              "chardonay": 56,
              "carmenere": 111,
              "syrah": 59
            },
            {
              "taste": "heavy",
              "chardonay": 85,
              "carmenere": 63,
              "syrah": 100
            },
            {
              "taste": "strong",
              "chardonay": 95,
              "carmenere": 52,
              "syrah": 78
            },
            {
              "taste": "sunny",
              "chardonay": 28,
              "carmenere": 95,
              "syrah": 115
            }
          ]}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)