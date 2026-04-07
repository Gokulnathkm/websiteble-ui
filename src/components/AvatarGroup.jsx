const AvatarGroup = () => {
  const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
  ];

  return (
    <div className="flex justify-center mt-6">
      {avatars.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="user"
          className={`w-10 h-10 rounded-full border-2 border-white 
          ${index !== 0 ? "-ml-3" : ""}`}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
