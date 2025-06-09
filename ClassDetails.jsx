import React from 'react';
import './ClassDetails.css';

const classSchedule = [
  {
    batch: 'Toddler Batch',
    age: '3 to 5',
    timings: ['Thu & Fri - 5:00 PM to 6:00 PM', 'Sat & Sun - 5:00 PM to 6:00 PM']
  },
  {
    batch: 'Sub-Junior Batch',
    age: '6 to 9',
    timings: ['Sat & Sun - 6:00 PM to 7:00 PM']
  },
  {
    batch: 'Junior Batch',
    age: '9 to 13',
    timings: ['Sat & Sun - 7:00 PM to 8:00 PM']
  },
  {
    batch: 'Senior Beginner Batch',
    age: '14 & above',
    timings: ['Sat & Sun - 8:00 PM to 9:00 PM']
  },
  {
    batch: 'Professional Batch',
    age: '-',
    timings: ['Wed, Thu, Fri - 8:00 PM to 9:30 PM']
  },
  {
    batch: 'Kids Professional Batch',
    age: '-',
    timings: ['Wed, Thu, Fri - 7:00 PM to 8:00 PM']
  },
  {
    batch: 'Zumba Batch',
    age: '-',
    timings: [
      'Morning: Mon, Wed, Thu, Fri - 7:30 AM to 8:30 AM',
      'Evening: Mon, Wed, Thu, Fri - 6:00 PM to 7:00 PM'
    ]
  },
  {
    batch: 'Sunday-Only Batch (Upcoming)',
    age: '-',
    timings: ['Batch 1: 9:00 AM to 10:00 AM', 'Batch 2: 10:00 AM to 11:00 AM']
  }
];

const ClassDetails = () => {
  return (
    <section id="class-details" className="class-details">
      <h2>Dance Shala - Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Batch Name</th>
            <th>Age Group</th>
            <th>Days & Timings</th>
          </tr>
        </thead>
        <tbody>
          {classSchedule.map((batch, index) => (
            <tr key={index}>
              <td>{batch.batch}</td>
              <td>{batch.age}</td>
              <td>
                {batch.timings.map((time, i) => (
                  <div key={i}>{time}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ClassDetails;
