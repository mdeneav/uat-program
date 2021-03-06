import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  presenters: [
    { date: 'April 1st' , presenters: [{title: "Taking a Tour of TOR: What's Beyond Icognito Mode", name:"Stephen White"},
    {title: "How is the  Weather in the Land of Oz?", name:"El Bachir Boumhaout"},
    {title: "The Chemical Computer", name:"Claire Simpson"},
    {title: "”Digital Logic: How 1's and 0's Make Up a Computer", name:"Leah Goggin"},
    {title: "The Friendship Paradox: Your Friends Are More Popular Than You Are and That's Okay", name:"Linda Zhang"}]},
    { date: 'April 2nd' , presenters: [{title: "Smallest Infinity", name:"David Huang"},
    {title: "Modern Mind Control: Optogenetics", name:"Allison Tam"},
    {title: "How to Protect Shared Documents: an Introduction to Locks", name:"Shivani Chauhan"},
    {title: "Fractals: Weird Dimensions", name:"Julian Mendoza"},
    {title: "Probing Protein Interactions with Light", name:"Zi-Ning Choo"}]},
    { date: 'April 8th' , presenters: [{title: "Screen Printing", name:"Christopher Au"},
    {title: "Protecting Your Privacy on the Internet", name:"Stanley Cen"},
    {title: "How to Read DNA", name:"Jennifer Lee"},
    {title: "Troubleshooting with CRISPR", name:"Emily  Tang"},
    {title: "Need For Speed: Merge Sort", name:"Sophia Tabchouri"}]},
    { date: 'April 9th' , presenters: [{title: "How Netflix Can Give You Smarter Recommendations", name:"Ignacio Fernandez"},
    {title: "Perception of Color: Things are Not Always as they Appear", name:"Nick O'Connell"},
    {title: "Teaching Computers How to Think", name:"Hannah Chen"},
    {title: "Finding Things Quickly with Quantum Computers", name:"Sam Duchovni"},
    {title: "Designing Digital", name:"Marayna Martinez"}]},
  ],
});
