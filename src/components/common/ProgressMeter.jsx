import Box from './Box';
import { GaugeContainer, GaugeReferenceArc, GaugeValueArc } from '@mui/x-charts';

export default function ProgressMeter(props) {
  const { width, height, innerRadius, value, percentText, subPercentText, centerDate, titleText, isMultiSubtitle, subTiteText,percentNumFontSize, percent_x, percent_y, dotPercentFontSize, dotPercent_x, dotPercent_y } = props;
  return (
    <Box
      sx={{
        width: { xs: '47%', md: 'auto' },
      }}
    >
      <GaugeContainer
        width={width || 230}
        height={height ||  250}
        startAngle={-125}
        innerRadius={innerRadius || 58}
        sx={{ position: 'relative' }}
        endAngle={125}
        value={value || 70}
      >
        <GaugeReferenceArc style={{ fill: '#DCDCDC' }} />{' '}
        {/* Set the color here */}
        <GaugeValueArc style={{ fill: '#FF936F' }} /> {/* Set the color here */}
        <text
          x={percent_x ||"50%"}
          y={percent_y ||"55%"}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#FF936F',
            fontSize: percentNumFontSize || '1.5rem',
            fontWeight: '800',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {percentText || '100'}
        </text>
        <text
          x={ dotPercent_x || "50%"}
          y={ dotPercent_y || "70%"}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#FF936F',
            fontSize: dotPercentFontSize|| '1rem',
            fontWeight: '400',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {subPercentText || ".28%"}
        </text>
        {centerDate&&( <text
          x="50%"
          y="67%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#00000080',
            fontSize: '12px',
            fontWeight: '700',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {centerDate}
        </text>)}
        <text
          x="50%"
          y= {isMultiSubtitle ? "78%" : subTiteText ? "80%" : "85%"}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#00000080',
            fontSize: '12px',
            fontWeight: '700',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {titleText}
        </text>
        {isMultiSubtitle ?   (
          <>
            <text
            x="50%"
            y="83%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
                fill: '#00000080',
                fontSize: '0.7rem',
                fontWeight: '600',
                fontFamily: '"Sora", sans-serif',
                maxWidth: '50px',
            }}
            >
            {/* {subTiteText} */}
            DEVELOPMENT
            </text>
            <text
            x="50%"
            y="88%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
                fill: '#00000080',
                fontSize: '0.7rem',
                fontWeight: '600',
                fontFamily: '"Sora", sans-serif',
                maxWidth: '50px',
            }}
            >
            FUND 
            </text> 
            <text
            x="50%"
            y="93%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
                fill: '#00000080',
                fontSize: '0.7rem',
                fontWeight: '600',
                fontFamily: '"Sora", sans-serif',
                maxWidth: '50px',
            }}
            >
             SPENT
            </text> 
            <text
            x="50%"
            y="98%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
                fill: '#00000080',
                fontSize: '0.7rem',
                fontWeight: '600',
                fontFamily: '"Sora", sans-serif',
                maxWidth: '50px',
            }}
            >
            {`(MP FUND)`}
            </text>
          </>
            ) : 
            subTiteText ? 
            <text
            x="50%"
            y="85%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
                fill: '#00000080',
                fontSize: '0.7rem',
                fontWeight: '600',
                fontFamily: '"Sora", sans-serif',
                maxWidth: '50px',
            }}
            >
            {subTiteText}
            </text> : ''
        }
        <text
          x="11%"
          y="86%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#00000080',
            fontSize: '0.6rem',
            fontWeight: '500',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {`0`}
        </text>
        <text
          x="93%"
          y="86%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#00000080',
            fontSize: '0.6rem',
            fontWeight: '500',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          {`100+`}
        </text>
      </GaugeContainer>
    </Box>
  );
}
