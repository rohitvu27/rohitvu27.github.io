const whoamiObj = {
  "message": [
    [
      "Between pixels, breakpoints, and motion,",
      "I build interfaces,",
      "asking for the next query — "
    ],
    [
      "Across endpoints, payloads, and misconfigurations,",
      "I break systems to understand them,",
      "waiting for a deeper question — "
    ],
    [
      "Between ideas, pivots, and execution,",
      "I build startups before certainty exists,",
      "still querying — "
    ],
    [
      "From clean UI to exposed attack surfaces,",
      "I move between building and breaking,",
      "identity unresolved — "
    ],
    [
      "In a loop of shipping, failing, and learning fast,",
      "I evolve through iteration,",
      "ask again — "
    ]
  ]
}


export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
