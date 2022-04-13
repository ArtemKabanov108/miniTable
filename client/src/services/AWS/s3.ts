import aws from 'aws-sdk';
import {IAWSOptions} from "../../constants/ITask";
import {randomBytes} from "crypto";

const region = process?.env.REACT_APP_AWS_REGION
const bucketName = process?.env.REACT_APP_AWS_BUCKET_NAME
const accessKeyId = process?.env.REACT_APP_AWS_KEY_ID
const secretAccessKey = process?.env.REACT_APP_AWS_SECRET_KEY
const signatureVersion = process?.env.REACT_APP_AWS_SIGN_VERSION

const options: IAWSOptions = {
    region,
    bucketName,
    accessKeyId,
    secretAccessKey,
    signatureVersion,
}

 export const s3 = new aws.S3(options)

export const generateUploadURL = async () => {
    try{
        console.log({bucketName})
        const params = ({
            Bucket: bucketName,
            Key: secretAccessKey,
            Expires: 60
        })
        return await s3.getSignedUrlPromise('putObject', params)
    } catch (err) {
        console.log(err)
    }

}