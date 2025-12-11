const whoamiObj = {
  message: [
    [
      "Cybersecurity is what I focus on the most,",
      "learning how systems work and improving through practice.",
    ],
    [
      "I explore cybersecurity and tech daily,",
      "always trying to understand systems better.",
    ],
    [
      "Most of my learning is hands-on,",
      "breaking things down and building real skills.",
    ],
    [
      "My main focus is cybersecurity,",
      "finding smarter and safer ways to secure systems.",
    ],
  ],
};

export const createWhoami = (): string[] => {
  const whoami: string[] = [];
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami;
};
