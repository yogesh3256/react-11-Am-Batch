import React, { useState } from "react";
import CommonButton from '../common/Button/CommonButton'
import LoginModal from "./LoginModal";
import CommonTable from "../common/Table/CommonTable";



function ModalAdd() {
    const [tableData, setTableData] = useState([]);

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const handleOpen = () => setOpenLoginModal(true);
    const handleClose = () => setOpenLoginModal(false);

    return (
        <div>
            <div className="text-end m-2">
                <CommonButton
                    type="button"
                    label="+ Add New"
                    className="bg-blue-900 text-white"
                    onClick={handleOpen}
                />
            </div>
            {
                openLoginModal &&
                <LoginModal
                    tableData={tableData}
                    setTableData={setTableData}
                    open={openLoginModal}
                    handleClose={handleClose}

                />
            }
            <div>
                <CommonTable
                    DataResult={tableData}
                />
            </div>


        </div>
    );
}

export default ModalAdd;
