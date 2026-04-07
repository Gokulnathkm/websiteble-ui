const AvatarGroup = () => {
  const avatars = [
    "https://i.pravatar.cc/40?img=12",
    "https://i.pravatar.cc/40?img=32",
    "https://i.pravatar.cc/40?img=5",
    "https://i.pravatar.cc/40?img=15",
    "https://i.pravatar.cc/40?img=22",
  ];

  return (
    <div className="flex justify-center mt-8">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="user"
          className={`w-10 h-10 rounded-full border-2 border-white shadow-sm ${
            i !== 0 ? "-ml-3" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;

