import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const artistData: { name: string; songs: any[] }[] = [
  {
    name: "kujo & nayz",
    songs: [
      {
        name: "bracco.",
        duration: 360,
        audioUrl: "https://www.youtube.com/watch?v=00QRihPrS4Y",
        imgUrl:
          "https://i1.sndcdn.com/artworks-liGzyRADoyQ35Hz0-h3HwDw-t500x500.jpg",
      },
    ],
  },
];

async function run() {
  await Promise.all(
    artistData.map(async (artist) => {
      return prisma.artist.upsert({
        where: {
          name: artist.name,
        },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              audioUrl: song.audioUrl,
              imgUrl: song.imgUrl,
            })),
          },
        },
      });
    })
  );

  const songs = await prisma.song.findMany({});

  await prisma.playlist.create({
    data: {
      name: "Wavy Tunes",
      songs: {
        connect: songs.map((song) => ({
          id: song.id,
        })),
      },
      imgUrl:
        "https://i1.sndcdn.com/artworks-liGzyRADoyQ35Hz0-h3HwDw-t500x500.jpg",
    },
  });
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
