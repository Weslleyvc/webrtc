turnConfig = {
  iceServers: [
    {
      urls: [ "stun:sp-turn1.xirsys.com" ]
    },
    {
      username: "hUWejrv6fgkkx8wMaqdhKZLvVlyvQE1zE9o3CTDiLHa0UuTUpoi36AmUnjtRSyLiAAAAAGRtXUt3ZXNsbGV5dmM=",
      credential: "c3cb9850-f9cb-11ed-91c3-0242ac120004",
      urls: [
        "turn:sp-turn1.xirsys.com:80?transport=udp",
        "turn:sp-turn1.xirsys.com:3478?transport=udp",
        "turn:sp-turn1.xirsys.com:80?transport=tcp",
        "turn:sp-turn1.xirsys.com:3478?transport=tcp",
        "turns:sp-turn1.xirsys.com:443?transport=tcp",
        "turns:sp-turn1.xirsys.com:5349?transport=tcp"
      ]
    }
  ]
}