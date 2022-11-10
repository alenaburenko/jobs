import { socials } from "./socials";
export default (req, res) => {
  const {
    query: { id },
  } = req;
  res.json({
    ...socials.filter((user) => user.id === id),
  });
};
