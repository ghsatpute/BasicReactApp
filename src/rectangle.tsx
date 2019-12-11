import * as React from 'react';
import { select } from 'd3-selection';

function Rectangle() {
    const svgRef = React.useRef<null | SVGSVGElement>(null);

    React.useEffect(
        () => {
            select(svgRef.current)
                .append('rect')
                .attr('width', 200)
                .attr('height', 100)
                .attr('fill', 'orange')
        }
    )

    return (
        <div>
            <svg ref={svgRef}>

            </svg>
        </div>
    )
}

export default Rectangle; 
