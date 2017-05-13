import React from 'react';
import Graph from 'react-graph-vis';

// Styles
// import './App/App.scss';

const graph = {
  nodes: [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ],
};

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: '#000000',
  },
};

const events = {
  select: (event) => {
    const { nodes, edges } = event;
  },
};


function App() {
  return (
    <div className="site-wrapper">
      <Graph graph={graph} options={options} events={events} />
    </div>
  );
}

export default App;
