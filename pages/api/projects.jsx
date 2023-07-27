export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/icons/1112481570935283842/a_80f43323ad33a6053557b84ea7a14997.gif?size=512",
      name: "Fuwk4n",
      description: "Buraları düzenlicem ",
      link: "https://discord.gg/GqnKFH2ds7",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/icons/1112481570935283842/a_80f43323ad33a6053557b84ea7a14997.gif?size=512",
      name: "Fuwk4n",
      description: "Buraları düzenlicem",
      link: "https://discord.gg/GqnKFH2ds7",
    }
  ];
  res.status(200).json(data);
};
