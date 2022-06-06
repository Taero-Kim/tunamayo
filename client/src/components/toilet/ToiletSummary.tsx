import { ToiletSummaryProps } from "../../types/toilet";

const ToiletSummary = ({ toilet }: ToiletSummaryProps) => {
  return (
    <>
      <div className="py-5 pl-5 border-b border-gray20">
        <div className="flex mb-3 font-normal text-tnBlack leading-[26px] text-base">
          <div className="mr-6">개방시간</div>
          <div>{toilet?.openTime}</div>
        </div>

        <div className="flex mb-3 font-normal text-tnBlack leading-[26px] text-base">
          <div className="mr-6">관리기관</div>
          <div>{toilet?.agency}</div>
        </div>

        <div className="flex font-normal leading-[26px] text-base items-center">
          <div className="mr-6 text-tnBlack">전화번호</div>
          <a
            href={`tel:${toilet?.agencyNumber}`}
            className={
              toilet?.agencyNumber ? "text-tnDeepBlue" : "text-tnBlack"
            }
          >
            {toilet?.agencyNumber || "-"}
          </a>
        </div>
      </div>
    </>
  );
};

export default ToiletSummary;
