import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const DynamicGraphBackground = () => {
  const graphRef = useRef(null);

  const drawGraph = (a, b) => {
    if (!graphRef.current) return;

    const width = graphRef.current.clientWidth;
    const height = graphRef.current.clientHeight;

    rd3.select(graphRef.current).select("svg").remove();

    const svg = d3
      .select(graphRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const xScale = d3.scaleLinear().domain([-10, 10]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-10, 10]).range([height, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));

    const data = Array.from({ length: width }, (_, i) => {
      const x = xScale.invert(i);
      const y = a * x + b;
      return [x, y];
    });

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  };

  useEffect(() => {
    drawGraph(1, 0);
  }, []);

  const handleMouseMove = (event) => {
    const rect = graphRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const a = (y / rect.height) * 2 - 1;
    const b = (x / rect.width) * 20 - 10;

    drawGraph(a, b);
  };

  return (
    <div
      ref={graphRef}
      style={{ width: "100%", height: "100%", background: "#f8f9fa" }}
      onMouseMove={handleMouseMove}
    />
  );
};

export default DynamicGraphBackground;
