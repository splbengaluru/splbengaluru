import { AVATAR_COLORS as c, DEFAULT_AVATAR } from "@/lib/avatar";
export default function PixelAvatar({ avatar = DEFAULT_AVATAR, size = 44 }) {
  const a = { ...DEFAULT_AVATAR, ...avatar };
  const px = (x,y,w,h,fill) => <rect x={x} y={y} width={w} height={h} fill={fill} />;
  const hair = c[a.hairColor], skin = a.skin === "brown" ? c.brownSkin : c[a.skin];
  const neck = skin, shirt = c[a.outfit], line = c.ink;
  const long = ["long", "bob"].includes(a.hairstyle);
  return <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    {px(0,0,16,16,"#f27bbd")}{px(1,1,14,14,"#d8f640")}
    {long && px(3,4,10,9,hair)}
    {px(4,3,8,9,line)}{px(5,4,6,7,skin)}
    {a.gender === "masculine" ? px(5,10,6,2,line) : null}
    {px(3,12,10,4,line)}{px(4,12,8,4,shirt)}{px(7,11,2,2,neck)}
    {a.hairstyle === "buzz" && px(5,3,6,1,hair)}
    {a.hairstyle === "crop" && <>{px(4,2,8,3,hair)}{px(4,4,2,2,hair)}</>}
    {a.hairstyle === "swept" && <>{px(4,2,8,2,hair)}{px(3,3,8,2,hair)}{px(4,5,1,2,hair)}</>}
    {a.hairstyle === "curly" && <>{px(4,2,2,2,hair)}{px(7,2,2,2,hair)}{px(10,2,2,2,hair)}{px(3,4,2,2,hair)}{px(11,4,2,2,hair)}</>}
    {a.hairstyle === "bob" && <>{px(4,2,8,3,hair)}{px(3,4,2,7,hair)}{px(11,4,2,7,hair)}</>}
    {a.hairstyle === "long" && <>{px(4,2,8,3,hair)}{px(3,4,2,9,hair)}{px(11,4,2,9,hair)}</>}
    {px(6,7,1,1,line)}{px(9,7,1,1,line)}{px(7,9,2,1,"#873b39")}
    {a.facialHair === "stubble" && <>{px(5,10,1,1,hair)}{px(10,10,1,1,hair)}</>}
    {a.facialHair === "mustache" && <>{px(6,9,1,1,hair)}{px(9,9,1,1,hair)}</>}
    {a.facialHair === "beard" && <>{px(5,10,1,2,hair)}{px(10,10,1,2,hair)}{px(6,11,4,1,hair)}</>}
    {a.gender === "feminine" && <>{px(4,7,1,1,line)}{px(11,7,1,1,line)}</>}
    {px(0,0,16,1,line)}{px(0,15,16,1,line)}{px(0,0,1,16,line)}{px(15,0,1,16,line)}
  </svg>;
}
