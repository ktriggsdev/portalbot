module.exports = {
  data: {
    name: "setup",
    description: "Setup Voice Rooms",
    options: [
      {
        type: 7,
        name: "category",
        description: "Choose your channel category",
        required: true,
      },
    ],
  },
  code: `$djsEval[
    execute(client, message, args) {
      const category = args.getInteger('category');

      // Create the "join-to-create" voice channel
      const joinChannel = await message.guild.channels.create(
        'join-to-create',
        {
          parent: category,
          type: 'voice',
        }
      );

      // Add a listener for members joining voice channels
      client.on('voiceStateUpdate', async (oldState, newState) => {
        if (newState.channelId === joinChannel.id) {
          const userChannel = await message.guild.channels.create(
            newState.member.displayName + "'s VC", // Concatenate strings without backticks
            {
              parent: category,
              type: 'voice',
            }
          );

          await newState.member.voice.setChannel(userChannel);

          userChannel.on('voiceStateUpdate', async (state) => {
            if (state.channelId === null) {
              await userChannel.delete();
            }
          });
        }
      });
    }
  ]`
}