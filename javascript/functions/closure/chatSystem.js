function chatSystem() {
  let participants = [];

  function joinRoom(newMember) {
    // const confirmJoin = confirm('Are you joining')
    // if (confirmJoin) { participants.push(newMember)}
    // details will come in
    console.log(`${newMember} is joining`);

    participants.push(newMember);
  }

  function leaveRoom(member) {
    // details will come in
    participants = participants.filter(function (el) {
      return el !== member;
    });
    console.log(`${member} is leaving`);
  }

  function getMembers() {
    console.log(participants);
  }

  const roomFeatures = {
    joinRoom: joinRoom,
    leaveRoom: leaveRoom,
    getMembers: getMembers,
  };

  return roomFeatures;
}

const classRoom = chatSystem();

classRoom.joinRoom('Mike');
classRoom.joinRoom('Ben');
classRoom.joinRoom('Rohit');
classRoom.getMembers();

classRoom.leaveRoom('Ben');
classRoom.getMembers();
classRoom.joinRoom('Ben');
classRoom.getMembers();
