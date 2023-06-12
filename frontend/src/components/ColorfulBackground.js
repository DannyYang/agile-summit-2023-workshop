import { useMemo } from 'react';
import ProgressLine from '../lib/ProgressLine';

const labelStyle = { 
    margin: '0 0.5rem',
    padding: '0 0.25rem',
    fontSize: '20px'
};

function ColorfulBackground({ results, options, isResultApiSuccess }) {
    const { mergedArray, totalCount } = useMemo(() => {
        const array = options.map((option) => {
            const countObject = results.find((result) => result.optionId === option.optionId);
            const count = countObject?.count || 0;
            return { ...option, count };
        });
        const count = array.reduce((sum, option) => sum + option.count, 0);
        return { mergedArray: array, totalCount: count };
    }, [results, options]);

    if (!isResultApiSuccess) {
        return <div>取得投票結果發生錯誤</div>;
    }

    if (results.length === 0) {
        return null;
    }

    const renderedArray = mergedArray
        .filter(({ count }) => count > 0)
        .map(({ bgColor, count, label }) => {
            const percentage = count ? (count / totalCount) * 100 : 0;
            return {
                label,
                percentage,
                color: bgColor
            };
        });
    
    const labelArray = renderedArray
        .map(({ label, percentage, color }, index) => {
            const percent = percentage.toFixed(2);
            return (
                <span key={index} style={{ 
                        ...labelStyle, 
                        borderLeft: '7px solid ' + color }}>
                    {label} {Number.isInteger(Number(percent)) ? Math.floor(percent) : percent}%
                </span>
            );
        });

    return (<>
        <ProgressLine
            visualParts={renderedArray}
        />
        <div style={{ textAlign: 'center' }}>
            {labelArray}
        </div>
    </>);
}

export default ColorfulBackground;
