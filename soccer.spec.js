describe('Tests for the Soccer Game', () => {
    describe('Test the getTotalPoints Method', () => {

        it('should return correct point total', () => {
            const points = getTotalPoints('wwdl');
            expect(points).toBe(7);
        })
    });

    describe("Test the order of the teams", () => {
        it('should return correct teams with points', () => {
            const team1 = {
                name: "Sounders",
                results: "wwdl"
            };
            const team2 = {
                name: "Galaxy",
                results: "dddl"
            };
            const expectedString = `Sounders: 7
Galaxy: 3`

            const result = orderTeams(team1, team2);
            expect(result).toContain("Sounders");
        });
    });
});