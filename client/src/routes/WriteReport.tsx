import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import { customAxios } from "../lib/customAxios";
import DrawerHeader from "../components/DrawerHeader";
import Modal from "../components/Modal";

const WriteReport = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryString: string = location.search;
  const reportType: string = queryString.split("=")[1];

  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [modal, setModal] = useState(false);

  const postReport = async () => {
    await customAxios
      .post("/reports", {
        reportTitle,
        reportContent,
        reportType,
      })
      .then((res) => {
        if (res.status === 201) {
          setModal(true);
        }
      });
  };

  return (
    <>
      <DrawerHeader
        title={reportType === "report" ? "화장실 제보하기" : "1:1 문의하기"}
        isAdmin={false}
        action={postReport}
      />
      <div className="relative">
        <input
          value={reportTitle}
          onChange={(e) => setReportTitle(e.target.value)}
          placeholder="글 제목"
          className="w-full px-5 py-4 border-b border-[#F6F6F6] outline-none text-tnBlack"
          type="text"
        />
        <textarea
          autoComplete="off"
          ref={ref}
          value={reportContent}
          onChange={(e) => setReportContent(e.target.value)}
          className=" w-full px-5 pt-4 outline-none no-scrollbar resize-none text-tnBlack"
        />
        {reportContent.length ? null : (
          <div
            onClick={() => ref.current?.focus()}
            className="absolute text-gray20 text-base font-normal leading-[26px] top-[72px] left-5"
          >
            {reportType === "report" ? (
              <div>
                <div>제보할 화장실 정보를 작성해 주세요.</div>
                <div>ex) 화장실 위치, 남녀공용 여부 등</div>
              </div>
            ) : (
              <div>불편한 사항이 있으면 자유롭게 문의해 주세요.</div>
            )}
          </div>
        )}
        {modal && (
          <Modal
            setModal={setModal}
            title={
              reportType === "report"
                ? "제보 접수가 완료되었습니다!"
                : "문의 접수가 완료되었습니다!"
            }
            oneButton="확인"
            action={() => navigate("/", { replace: true })}
          />
        )}
      </div>
    </>
  );
};

export default WriteReport;