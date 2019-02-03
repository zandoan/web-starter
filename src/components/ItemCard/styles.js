export default ({ palette, spacing }) => ({
  card: {
    display: 'flex',
    borderRadius: '10px',
    margin: '5px',
  },
  thumbnail: {
    width: '30%',
  },
  content: {
    width: '70%',
  },
  title: {
    padding: `${spacing.unit / 2}px`,
  },
  cuisine: {
    padding: `${spacing.unit / 2}px`,
    marginBottom: `${spacing.unit * 2}px`,
  },
  icon: {
    marginBottom: `-${spacing.unit / 2}px`,
  },
  bottomContainer: {
    color: palette.primary.main,
    padding: `${spacing.unit / 2}px`,
    marginBottom: `${spacing.unit / 2}px`,
  },
  sub: {
    fontSize: '10px',
  }
});
