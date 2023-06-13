export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/691729067636031538/3d7584c80dfe767a07724d1549d36378.webp?size=1024",
      name: "Fuwk4n",
      description: "Buraları düzenlicem ",
      link: "https://discord.gg/GqnKFH2ds7",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/avatars/691729067636031538/3d7584c80dfe767a07724d1549d36378.webp?size=1024",
      name: "Fuwk4n",
      description: "Buraları düzenlicem",
      link: "https://discord.gg/GqnKFH2ds7",
    }
  ];
  res.status(200).json(data);
};
