import React, { Component } from 'react';
import {Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['Total Customer', 'Total Driver', 'Total Ride',
    'Cancel Ride', 'Total Booking'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [60, 20, 62, 10, 49]
    }
  ]
}

export default class PieChart extends Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              fontSize: 18
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}