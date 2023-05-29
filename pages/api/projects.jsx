export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/691729067636031538/a_ef3cdf1163f5bb2c62068a34dfb7c87c.gif?size=1024",
      name: "Fuwk4n",
      description: "Nesef alırım arada vermeyi unuturum keşke komple unutsam ",
      link: "https://discord.gg/GqnKFH2ds7",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/avatars/691729067636031538/a_ef3cdf1163f5bb2c62068a34dfb7c87c.gif?size=1024",
      name: "Fuwk4n",
      description: "Nesef alan sıradan bir Furkan",
      link: "https://discord.gg/GqnKFH2ds7",
    }
  ];
  res.status(200).json(data);
};
