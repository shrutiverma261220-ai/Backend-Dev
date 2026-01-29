import fs from "fs";

function createMember(memberId, name, membershipType) {
    try {
        let members = [];

        if (fs.existsSync("member.json")) {
            members = JSON.parse(fs.readFileSync("member.json", "utf-8"));

            let isMemberExist = members.some(
                (member) => member.memberId === memberId
            );

            if (isMemberExist) {
                return "Member already exists";
            }
        }

        let newMember = { memberId, name, membershipType };
        members.push(newMember);

        fs.writeFileSync("member.json", JSON.stringify(members, null, 2));
        return "Member created successfully";
    } 
    catch (error) {
        console.log(error);
    }
}

export default createMember;
