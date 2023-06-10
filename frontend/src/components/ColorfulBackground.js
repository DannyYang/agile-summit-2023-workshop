import { useMemo } from 'react';

const containerStyle = { 
    position: 'relative', 
    display: 'flex', 
    width: '100%', 
    height: '50vh' 
};

const labelStyle = { 
    backgroundColor: 'white', 
    textAlign: 'center'
};

function ColorfulBackground({ results, options }) {
    const { mergedArray, totalCount } = useMemo(() => {
        const array = options.map((option) => {
            const countObject = results.find((result) => result.optionId === option.optionId);
            const count = countObject?.count || 0;
            return { ...option, count };
        });
        const count = array.reduce((sum, option) => sum + option.count, 0);
        return { mergedArray: array, totalCount: count };
    }, [results, options]);

    return results.length != 0 ? (
        <div style={containerStyle}>
            {mergedArray.map(({ bgColor, count, label }, index) => {
                const percent = count ? Math.floor((count / totalCount) * 100) + '%' : '';
                const blockStyle = {
                    backgroundColor: bgColor,
                    flexBasis: `${(count / totalCount) * 100}%`
                };
                return (
                    <div key={index} style={blockStyle}>
                        <div style={labelStyle}>
                            {percent}
                            {count !== 0 && label}
                        </div>
                    </div>
                );
            })}
        </div>
    ) : null;
}

export default ColorfulBackground;
