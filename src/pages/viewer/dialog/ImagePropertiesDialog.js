import React from 'react';
import {
    AlignCenter,
    Container,
    Flex,
    ImageBoxText,
    NoImageBox,
    SubText,
    ButtonIcon,
    TitleText,
    AddTagButton,
    InputBox,
    ImageFileBox,
    AddExistingBox,
    JustifySpace,
    ListNoImageBox,
    ListBoxText,
    ListImageBox, RadioBox,
    FormControlBox, ImageBox, AddExistingEmpty
} from "./styles/ImagePropertiesDialogStyle";
import {ReactComponent as BannerNoImageIcon} from "../../common/images/BannerNoImageIcon.svg";
import {ReactComponent as FileDeleteIcon} from "../../common/images/FileDeleteIcon.svg";
import {ReactComponent as StreamingChecked} from "../../common/images/StreamingChecked.svg";
import {ReactComponent as StreamingUnChecked} from "../../common/images/StreamingUnChecked.svg";
import {ReactComponent as StreamingUnRadioIcon} from "../../common/images/StreamingUnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../common/images/RadioIcon.svg";
import {ReactComponent as AddExistingEmptyIcon} from "../../common/images/AddExistingEmptyIcon.svg";
import {FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, Typography} from "@mui/material";
import StreamingNoImageIcon from "../../common/images/StreamingNoImageIcon.svg";
import TestVideoImage from "../../common/images/TestVideoImage.jpg";

function ImagePropertiesDialog(props) {
    const [fileName, setFileName] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <Container>
            <NoImageBox>
                <BannerNoImageIcon/>
                <ImageBoxText>Preview</ImageBoxText>
                {/*<ImageBoxText>Please register the background image.</ImageBoxText>*/}
            </NoImageBox>

            {/*<ImageBox>*/}
            {/*    <img src={TestVideoImage} alt='image'/>*/}
            {/*</ImageBox>*/}

            <Flex>
                <TitleText>New Upload</TitleText>
                <div>
                   <AlignCenter>
                       <ImageFileBox variant="outlined">
                           <OutlinedInput
                               placeholder={'image file'}
                               value={fileName}
                               onChange={(event) => {
                                   setFileName(event.target.value);
                               }}
                               endAdornment={
                                   fileName === '' ?
                                       <></>
                                       :
                                       <InputAdornment position="end">
                                           <ButtonIcon disableRipple>
                                               <FileDeleteIcon />
                                           </ButtonIcon>
                                       </InputAdornment>
                               }
                           />
                       </ImageFileBox>

                       <InputBox
                           accept=".jpg, .gif, .bmp, .png"
                           id="contained-button-file"
                           multiple
                           type="file"
                       />
                       <label htmlFor="contained-button-file">
                           <AddTagButton component="span" disableRipple>
                               Browse
                           </AddTagButton>
                       </label>
                   </AlignCenter>
                    <SubText>
                        * Images can be uploaded up to 100MB.<br/>
                        * Formats is JPG, GIF, BMP, or PNG.
                    </SubText>
                </div>
            </Flex>

            <Flex>
                <TitleText>Add Existing</TitleText>

                <AddExistingEmpty>
                    <AddExistingEmptyIcon/>
                    <Typography>
                        No registered image.
                    </Typography>
                </AddExistingEmpty>
                {/*<AddExistingBox>*/}
                {/*    <JustifySpace>*/}
                {/*        <AlignCenter>*/}
                {/*            <RadioBox*/}
                {/*                checked={selectedValue === 'a'}*/}
                {/*                onChange={handleChange}*/}
                {/*                value="a"*/}
                {/*                checkedIcon={<StreamingChecked />}*/}
                {/*                icon={<StreamingUnChecked />}*/}
                {/*                disableRipple*/}
                {/*            />*/}
                {/*            <ListNoImageBox>*/}
                {/*                <img src={StreamingNoImageIcon} alt='image'/>*/}
                {/*            </ListNoImageBox>*/}
                {/*            /!*<ListImageBox>*!/*/}
                {/*            /!*    <img src={TestVideoImage} alt='image'/>*!/*/}
                {/*            /!*</ListImageBox>*!/*/}
                {/*            <ListBoxText>*/}
                {/*                filename*/}
                {/*            </ListBoxText>*/}
                {/*        </AlignCenter>*/}
                {/*        <ButtonIcon disableRipple>*/}
                {/*            <FileDeleteIcon />*/}
                {/*        </ButtonIcon>*/}
                {/*    </JustifySpace>*/}

                {/*    <JustifySpace>*/}
                {/*        <AlignCenter>*/}
                {/*            <RadioBox*/}
                {/*                checked={selectedValue === 'b'}*/}
                {/*                onChange={handleChange}*/}
                {/*                value="b"*/}
                {/*                checkedIcon={<StreamingChecked />}*/}
                {/*                icon={<StreamingUnChecked />}*/}
                {/*                disableRipple*/}
                {/*            />*/}
                {/*            /!*<ListNoImageBox>*!/*/}
                {/*            /!*    <img src={StreamingNoImageIcon} alt='image'/>*!/*/}
                {/*            /!*</ListNoImageBox>*!/*/}
                {/*            <ListImageBox>*/}
                {/*                <img src={TestVideoImage} alt='image'/>*/}
                {/*            </ListImageBox>*/}
                {/*            <ListBoxText>*/}
                {/*                filename*/}
                {/*            </ListBoxText>*/}
                {/*        </AlignCenter>*/}
                {/*        <ButtonIcon disableRipple>*/}
                {/*            <FileDeleteIcon />*/}
                {/*        </ButtonIcon>*/}
                {/*    </JustifySpace>*/}
                {/*</AddExistingBox>*/}
            </Flex>

        </Container>
    );
}

export default ImagePropertiesDialog;
